import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/authOptions";
import { revalidateTag } from "next/cache";
import { addUserFav, deleteUserFav, getUserFavs } from "@/firebase/db.config";

export async function GET() {
  const {
    user: { id },
  } = await getServerSession(authOptions);

  const userFavs = await getUserFavs(id);

  return NextResponse.json(userFavs);
}

export async function POST(request) {
  const {
    user: { id },
  } = await getServerSession(authOptions);

  const body = await request.json();

  await addUserFav({ pokemon: body, userID: id });

  revalidateTag("favs");

  return NextResponse.json("added");
}

export async function DELETE(request) {
  const {
    user: { id },
  } = await getServerSession(authOptions);

  const body = await request.json();

  await deleteUserFav({ userID: id, pokemonID: body.id });

  revalidateTag("favs");

  return NextResponse.json("deleted");
}
