
import { createClient } from '@supabase/supabase-js'
import type { NextApiRequest, NextApiResponse } from 'next'

const supabaseUrl = 'https://eiffdggkcjegchiecaje.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY as string
const supabase = createClient(supabaseUrl, supabaseKey)

interface User {
    id: number,
    FirstName: string,
    LastName: string,
    Email: string,
    CreatedDate: string,
    Password?: string,
    Skills: string[],
    UserInfo: UserInfo
}

interface UserInfo {
    summary: string,
    city: string,
    state: string
}

interface SkillObj {
    id: number,
    skillObj: { skill: string }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method == "POST") {
        InsertNewUser(req, res);
    }

    if (req.method == "GET") {
        GetUser(req, res);
    }
}

async function InsertNewUser(req: NextApiRequest, res: NextApiResponse) {

    const user = {
        username: "lazyboi",
        firstName: "steven",
        lastName: "lu"
    }

    const result = await supabase.from("User").insert({ "UserName": user.username, "FirstName": user.firstName, "LastName": user.lastName });

    res.json(result);

}

async function GetUser(req: NextApiRequest, res: NextApiResponse) {

    const result = await supabase.from("User").select("*").eq("Email", req.body.email).limit(1).single();

    const current_user = result.data as User;

    const skill_result = await supabase.from("UserSkills").select("id, skillObj: Skills(skill)").eq("user_id", current_user.id);

    const current_user_skills: SkillObj[] = skill_result.data as SkillObj[];

    const user_info_result = await supabase.from("UserInfo").select("summary, city, state").eq("user_id", current_user.id).limit(1).single();

    const user_info: UserInfo = user_info_result.data as UserInfo;

    current_user.UserInfo = user_info;
    current_user.Skills = current_user_skills.map((skill) => skill.skillObj.skill);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'max-age=180000');
    res.end(JSON.stringify(current_user));



}

async function Update(req: NextApiRequest, res: NextApiResponse) {

    console.log(req.body.username);
    const result = await supabase.from("User").select("*").eq("UserName", req.body.username);

    res.json(result);
}