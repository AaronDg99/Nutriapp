<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);

        if($validator->fails()){
            return $this->sendError('Validation Error.',
            $validator->errors());
        }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['token'] = $user->createToken('MyApp')->accessToken;
        $success['name'] = $user->name;

        return $this->sendResponse($success, 
        'User register succesfully');
    }

    public function login(Request $request){
        if(Auth::attempt([
        'email' =>$request->email,
        'password' => $request->password])){
            $user = Auth::user();
            $success['token'] = $user->createToken('MyApp')
            ->accessToken;
            $success['name'] = $user->name;
            return $this->sendResponse($success,
            'User register succesfully');
        }
        else {
            return $this->sendError('Unauthorised',
            ['error'=>'Unauthorised.']);
        }
    }

    public function sendResponse($result, $message)
    {
        $response = [
            'success' => true,
            'data' => $result,
            'message' => $message,
        ];

        return response()->json($response, 200);
    }

}
