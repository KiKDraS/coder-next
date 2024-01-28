"use client";

import { debounce } from "@/app/utils/debounce";
import { getSubSet } from "@/app/utils/getSubset";
import { DeleteUserIcon } from "@/app/utils/icons";
import { Table } from "flowbite-react";
import { useEffect, useRef, useState } from "react";

const deleteUser = async (id, setList) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/users`, {
    method: "DELETE",
    body: JSON.stringify({ id }),
  });

  if (!res.ok) throw new Error("Error deleting user");

  setList((prev) => prev.filter((user) => user.id !== id));
};

const UsersTable = ({ users = [] }) => {
  const [list, setList] = useState(() =>
    getSubSet({ arr: users, offset: 0, limit: 20 })
  );
  const [offset, setOffset] = useState(0);
  const containerRef = useRef(null);
  const prevScrollY = useRef(0);

  const debounceScroll = debounce(async (offset) => {
    const newUsers = getSubSet({ arr: users, offset, limit: 20 });
    setList((prev) => {
      return [...prev, ...newUsers];
    });
  }, 500);

  useEffect(() => {
    const container = containerRef.current;
    function scrollFn() {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const deltaY = scrollTop - prevScrollY.current;
      prevScrollY.current = scrollTop;
      const tolerance = 5;

      if (
        deltaY !== 0 &&
        Math.abs(scrollHeight - scrollTop - clientHeight) < tolerance
      ) {
        const newOffset = offset + 1;
        setOffset(() => newOffset);
        debounceScroll(newOffset);
      }
    }
    container.addEventListener("scroll", scrollFn);
    return () => container.removeEventListener("scroll", scrollFn);
  }, [debounceScroll, offset]);

  return (
    <div ref={containerRef} className="overflow-y-auto h-[65vh]">
      <Table>
        <Table.Head>
          <Table.HeadCell>Nombre de usuario</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Eliminar</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {list.map((user) => (
            <Table.Row
              key={user.id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell>{user.username}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  {DeleteUserIcon()}
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};
export default UsersTable;
