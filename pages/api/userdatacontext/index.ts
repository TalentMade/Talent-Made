
import { createClient } from '@supabase/supabase-js'
import type { NextApiRequest, NextApiResponse } from 'next'
import { userInfo } from 'os'
import { Database } from '../../../models/supabase'

const supabaseUrl = 'https://eiffdggkcjegchiecaje.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY as string
const supabase = createClient<Database>(supabaseUrl, supabaseKey)

//Database types pulled automatically
interface User {
    user: Database['public']['Tables']['User']['Row']
}

// interface UserInfo {
//     summary: string,
//     city: string,
//     state: string
// }

// interface SkillObj {
//     id: number,
//     skillObj: { skill: string }
// }

export default function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method == "POST") {
        InsertNewUser(req, res);
    }

    if (req.method == "GET") {
        GetUser(req, res);
    }
}

async function InsertNewUser(req: NextApiRequest, res: NextApiResponse) {

    const result = await supabase.from("User").insert({ firstname: req.body.firstname, lastname: req.body.lastname });

    res.json(result);

}

async function GetUser(req: NextApiRequest, res: NextApiResponse) {

    //data can be joined if foreign key relations exists on table selected
    //UserInfo has user_id which is a foreign key and linked to User table
    //UserSkills has user_id which is a foreign key and linked to User table
    //Skills has skill_id which is a foreign key and linked to UserSkill table


    //select query definition: select ALL from User table then join UserInfo and UserSkills table. 
    //data from UserInfo table will be an object or array of objects and is labeled as 'userInfo'. 
    //data from UserSkills table will be an object or array of objects and is labeled as 'skills'.
    //nested join is performed between UserSkills and Skills to get the description of skills. this is possible because UserSkills has foreign key 'skill_id' and has a relationship set up with Skills table
    //advance query definition: UserInfo(*) = joins UserInfo 'user_id' col to User 'id' col then get all column data. 
    //advance query definition: UserSkills(Skills(skill)) = Joins UserSkills 'user_id' col to User 'id' col then joins UserSkills 'skill_id' col to Skills 'id' col to get description of skill
    const { error, data } = await supabase.from("User").select(`*, userInfo: UserInfo(*), userSkill: UserSkills(definitions: Skills(skill))`).eq("email", req.body.email).limit(1).single();

    const userSkill: Database["public"]["Tables"]["UserSkills"]["Row"] = data?.userSkill;

    console.log(userSkill.id);


    // console.log(result)

    // const skill_result = await supabase.from("UserSkills").select("id, skillObj: Skills(skill)").eq("user_id", current_user.id);

    // const current_user_skills: SkillObj[] = skill_result.data as SkillObj[];

    // const user_info_result = await supabase.from("UserInfo").select("summary, city, state").eq("user_id", current_user.id).limit(1).single();

    // const user_info: UserInfo = user_info_result.data as UserInfo;

    // current_user.UserInfo = user_info;
    // current_user.Skills = current_user_skills.map((skill) => skill.skillObj.skill);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'max-age=180000');
    res.end(JSON.stringify(data));



}

async function Update(req: NextApiRequest, res: NextApiResponse) {

    console.log(req.body.username);
    const result = await supabase.from("User").select("*").eq("UserName", req.body.username);

    res.json(result);
}