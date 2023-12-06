import { fetchRedis } from "./redis";

export const getFriendsByUserId = async (userId: string) => {
  const FriendIds = (await fetchRedis(
    "smembers",
    `user:${userId}:friends`
  )) as string[];

  const friends = await Promise.all(
    FriendIds.map(async (friendId) => {
      const friend = (await fetchRedis("get", `user:${friendId}`)) as User;
      return friend;
    })
  );

  return friends;
};
