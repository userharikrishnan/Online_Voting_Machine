<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    //login function
    public function login(Request $request)
    {
        $request->validate([
            'username' => 'required|string',
            'password' => 'required|string',
        ]);

        $credentials = $request->only('username', 'password');

        if (Auth::guard('admin')->attempt($credentials)) {
           
            $admin = Auth::guard('admin')->user();
            $token = $admin->createToken('AdminToken')->plainTextToken;

            return response()->json([
                'message' => 'Admin login successful.',
                'token' => $token, 
            ]);
        }

        return response()->json(['message' => 'Invalid credentials.'], 401);
    }
    //logout function
    
    public function logout()
    {
        $user = Auth::guard('sanctum')->user();

        if ($user) {
            $user->tokens()->delete(); // Invalidate all tokens
            return response()->json(['message' => 'Admin successfully logged out.'], 200);
        }

        return response()->json(['message' => 'Admin not authenticated.'], 401);
    }

}
