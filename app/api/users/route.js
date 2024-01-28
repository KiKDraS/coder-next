import { deleteUser, getUsers } from "@/firebase/db.config";
import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function GET() {
  const users = await getUsers();

  const withOutAdmins = users.filter((user) => user.role !== "admin");

  return NextResponse.json(withOutAdmins);
}

export async function DELETE(request) {
  const body = await request.json();

  await deleteUser(body.id);

  revalidateTag("users");

  return NextResponse.json("deleted");
}
