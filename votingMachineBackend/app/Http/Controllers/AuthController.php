<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

    //Registering a user or creating a user
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json(['message' => 'User registered successfully.'], 201);
    }

        // user login functionality
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        if (Auth::attempt($request->only('email', 'password'))) {
            $user = Auth::user();
            $token = $user->createToken('auth_token')->plainTextToken;
            return response()->json(['message' => 'Login successful.', 'token' => $token]);
        }

        return response()->json(['message' => 'Invalid credentials.'], 401);
    }

        //logout function
        public function logout()
        {
            $user = Auth::guard('sanctum')->user();
        
            if ($user) {
                $user->tokens()->delete(); // Invalidate all tokens
                return response()->json(['message' => 'Successfully logged out.'], 200);
            }
        
            return response()->json(['message' => 'User not authenticated.'], 401);
        }
        
}