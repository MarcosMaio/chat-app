import { LucideProps, UserPlus } from "lucide-react";

export const Icons = {
  Logo: (props: LucideProps) => (
    <div className="flex items-center gap-2 text-zinc-700 font-bold hover:text-custom-indigo group">
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="rgb(63 63 70)"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-messages-square group-hover:stroke-custom-indigo">
        <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2z" />
        <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
      </svg>
      <h1>Chat-App</h1>
    </div>
  ),
  UserPlus,
};

export type Icon = keyof typeof Icons;
