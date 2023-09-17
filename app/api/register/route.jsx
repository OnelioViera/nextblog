import {NextResponse} from 'next/server'; // import NextResponse 
import dbConnect from '@/utils/dbConnect'; // import dbConnect
import User from '@/models/user'; // import User model
import bcrypt from 'bcrypt'; // import bcrypt

export async function POST(req) {
  const _req = await req.json(); // parse request body
  // console.log(_req);
  await dbConnect(); // connect to database

  try {
    const {name, email, password } = _rep; // destructure request body
    // check if user exists
    const existingUser = await User.findOne({email});
    if (existingUser) {
      return NextResponse.json(
        {err: "User already exists"},
        {status: 404}
        );
    }
    
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {err: "Server error"},
      {status: 500}
      );
  }
}