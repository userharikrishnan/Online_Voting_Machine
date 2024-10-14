<?php

namespace App\Http\Controllers;

use App\Models\Vote;
use App\Models\Candidate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class VotingController extends Controller
{
    public function vote(Request $request)
    {
        \Log::info('Vote attempt by user: ' . Auth::id());
    
        $request->validate([
            'candidate_id' => 'required|exists:candidates,id',
        ]);
    
        $existingVote = Vote::where('user_id', Auth::id())->first();
        if ($existingVote) {
            return response()->json(['message' => 'You have already voted.'], 403); 
        }
    
        
        \Log::info('Casting vote for candidate ID: ' . $request->candidate_id);
    
        Vote::create([
            'user_id' => Auth::id(),
            'candidate_id' => $request->candidate_id,
        ]);
    
        return response()->json(['message' => 'Vote cast successfully.']);
    }


    //result function


    public function results()
    {
        $results = Candidate::withCount('votes')->get();
        return response()->json($results);
    }
}
