<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use \GuzzleHttp\User;
use App\Models\Todo;

class TodoController extends Controller
{
    //
    public function addtodo(Request $request)
    {
        $title =  $request->title;
        $description =  $request->description;

         $insert = DB::table('todo')->insert([
             	'title'=>$title,'description'=>$description,'created_at' => DB::raw('now()'),'updated_at'=>DB::raw('now()')
             ]);
          
        if(!$insert){
            echo "Sorry Fail to Registarion";
        }
        else{
            echo "Added Successully ";
        }
    }

    public function todolist(){
     
         $tododata = Todo::get();
         echo $tododata;
    }

    public function deletetodo(Request $request){
     
        $id =  $request->id;
        

            $deletetodo = DB::table('todo')
                ->where('id', $id)
                ->delete();

                if(!$deletetodo){
                    echo "Sorry !!";
                }
                else{
                    echo "Deleted Successully ";
                }
   }

   public function updatetodo(Request $request){
     
    $id =  $request->id;
    

        $updatetodo = DB::table('todo')
            ->where('id', $id)
            ->get();

        $id = $updatetodo[0]->id;
        $name = $updatetodo[0]->title;
        $description = $updatetodo[0]->description;

        echo json_encode(array('id'=>$id,'name'=>$name,'description'=>$description));

      
    }

    public function updatetodoentry(Request $request){
     
        $id =  $request->id;
        $title =  $request->title;
        $description =  $request->description;

        	$updateentry = DB::table('todo')
			->where('id',$id)
			->update([
                'title'=>$title,
                'description'=>$description
			]);

                if(!$updateentry){
                   echo  "sorry";
                }
                else{
                    echo "Updated Successully";
                }
        }
}
