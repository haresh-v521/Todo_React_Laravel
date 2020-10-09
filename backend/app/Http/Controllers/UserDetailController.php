<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Userdetail;
use \GuzzleHttp\User;
use Illuminate\Support\Facades\DB;

class UserDetailController extends Controller
{
    //
    public function index(){
        // echo "hello";
 
        // $productdata = Product::all();
        // echo $productdata;
 
         $servicedata = Service::get();
         echo $servicedata;
    }

    public function checklogin(Request $request)
    {
        
       // echo json_encode(array('user'=>"sead",'post'=>'ddd','comment'=>'sdss'));
       $username =  $request->username;
       $password =  $request->password ;
      // echo  $username." ".$password;
        
       $users = DB::table('userdetail')
         ->where('email',$username)
         ->where('password',$password)
        ->get();


        //dd($users);
        
        if(sizeof($users)>0)
        {
            echo "Valid";
        }else{
            echo "Invalid";
        }
    }

    public function register(Request $request)
    {
        $name =  $request->name;
        $address =  $request->address;
        $email =  $request->email;
        $password =  $request->password;

        
        $insert = DB::table('userdetail')->insert([
            	'name'=>$name,'address'=>$address,'email'=>$email,'password'=>$password,'created_at' => DB::raw('now()'),'updated_at'=>DB::raw('now()')
            ]);
          
        if(!$insert){
            echo "Sorry Fail to Registarion";
        }
        else{
            echo "Registration Successully ";
        }
    }
}
