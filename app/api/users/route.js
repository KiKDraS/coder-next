import { getUserImage } from "@/app/utils/getUserImage";
import { addUser } from "@/firebase/db.config";
import { signIn } from "next-auth/react";
import { NextResponse } from "next/server";

export async function POST(request) {
  debugger;
  const data = JSON.parse(request.body);
  const { username, email, pass } = data;
  console.log(data);
  const image = getUserImage();
  const user = { username, email, pass, image, role: "user" };
  await addUser(user);
  signIn("credentials", { ...user, callbackUrl: ROUTES.HOME_PAGE });

  return NextResponse.json({ ok: "ok" });
}
