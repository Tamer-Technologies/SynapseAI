export default async function fetchRandomUsers(noOfUsers) {
  try {
    const response = await fetch(
      `https://randomuser.me/api/?results=${noOfUsers}&gender=male`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}
