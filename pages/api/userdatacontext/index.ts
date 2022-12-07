
import { createClient } from '@supabase/supabase-js'
import type { NextApiRequest, NextApiResponse } from 'next'

const supabaseUrl = 'https://eiffdggkcjegchiecaje.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY as string
const supabase = createClient(supabaseUrl, supabaseKey)


export default function handler(req: NextApiRequest, res:NextApiResponse ){
    
    if(req.method == "POST"){
        InsertNewUser(req, res);
    }

    if(req.method == "GET"){
        GetUser(req, res);
    }
}

async function InsertNewUser(req: NextApiRequest, res:NextApiResponse){

    const user = {
        username: "lazyboi",
        firstName: "steven",
        lastName: "lu"
    }

    const result = await supabase.from("User").insert({"UserName": user.username, "FirstName": user.firstName, "LastName": user.lastName});

    res.json(result);



}

async function GetUser(req: NextApiRequest, res:NextApiResponse){

    console.log(req.body.username);
    const result = await supabase.from("User").select("*").eq("UserName", req.body.username);

    res.json(result);
}

async function Update(req: NextApiRequest, res:NextApiResponse){

    console.log(req.body.username);
    const result = await supabase.from("User").select("*").eq("UserName", req.body.username);

    res.json(result);
}