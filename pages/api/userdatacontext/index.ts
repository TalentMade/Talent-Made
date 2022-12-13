
import { createClient } from '@supabase/supabase-js'
import type { NextApiRequest, NextApiResponse } from 'next'

const supabaseUrl = 'https://eiffdggkcjegchiecaje.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY as string
const supabase = createClient(supabaseUrl, supabaseKey)

interface User {
    id: number,
    FirstName: string,
    LastName: string,
    CreateDate: string,
    email: string,
    password: string,
    skills: UserSkills[]
}

interface UserSkills {
    description: Skills
}

interface Skills {
    skill: string,
}


export default function handler(req: NextApiRequest, res:NextApiResponse ){

    if(req.method == "POST"){
        InsertNewUser(req, res);
    }

    if(req.method == "GET"){
        GetUser(req, res);
    }
}

async function getUserSkills(user_id: number) {
    console.log("user id: ", user_id);
    const result = await supabase.from("UserSkills").select('*').eq("user_id", user_id);
    console.log("user skills result", result);
    return result;
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
    const result = await supabase.from("User").select("*").eq("email", req.body.email);
    const current_user: User = result.data?.[0] as User
    const skills_result = await supabase.from("UserSkills").select(`description:Skills(skill)`).eq("user_id", current_user.id);
    const current_skills: UserSkills[] = skills_result?.data as UserSkills[];
    current_user.skills = current_skills;
    res.json(current_user);
}

async function Update(req: NextApiRequest, res:NextApiResponse){

    console.log(req.body.username);
    const result = await supabase.from("User").select("*").eq("UserName", req.body.username);

    res.json(result);
}