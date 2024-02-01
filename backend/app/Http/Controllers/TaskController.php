<?php

namespace App\Http\Controllers;

use App\Http\Requests\TaskCreateRequest;
use App\Http\Requests\TaskUpdateRequest;
use App\Http\Resources\TaskResource;
use App\Models\Task;
use App\Models\User;
use Illuminate\Http\Request;
use PhpParser\Node\Stmt\Return_;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $task = Task::with('author')->paginate(50);
        return TaskResource::collection($task);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TaskCreateRequest $request)
    {
        $user = Task::create($request->all());
        return new TaskResource($user);
        //return response()->json(["message" => "created successfully"]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $task = Task::with(['author'])->where('id', $id)->first();
        return new TaskResource($task);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(TaskUpdateRequest $request, string $id)
    {
        $data = $request->validated();
        $data = array_filter($data);
        Task::where('id', $id)->first()->update($data);
        return response()->json(["message" => "updated successfully"]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Task::where('id', $id)->first()->delete();
        return response()->json(["message" => "deleted successfully"]);
    }
}
