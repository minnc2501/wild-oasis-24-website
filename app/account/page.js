import { auth } from "@/app/_lib/auth";
import { greetByTime } from "@/app/others/helper";
import Clock from "@/app/_components/Clock";

export const metadata = {
  title: "Guest area",
};

export default async function Page() {
  const greed = greetByTime();

  const session = await auth();
  console.log(session.user.guestId);
  const firstName = session.user.name.split(" ").at(0);
  return (
    <div className=" mb-7 flex justify-between items-center">
      <h2 className="font-semibold text-2xl text-accent-400">
        {greed} {firstName}
      </h2>
      <div>
        <Clock />
      </div>
    </div>
  );
}
