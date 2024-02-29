const MAX_LEN = 5;

export const generateRandomId = () => {
  let ans = "";
  const subset = "1234567890abcdefghijklmnopstuvwxyzABCDEFGHIJKLMNOPSTUVWXYZ";

  for (let i = 0; i < MAX_LEN; i++) {
    ans += subset[Math.floor(Math.random() * subset.length)];
  }

  return ans;
};
