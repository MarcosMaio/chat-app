import AddFriendButton from "@/components/AddFriendButton";
import { FC } from "react";

const Page: FC = () => {
  return (
    <section className="pt-8">
      <h1 className="text-5xl font-bold mb-8">Add a friend</h1>
      <AddFriendButton />
    </section>
  );
};

export default Page;
