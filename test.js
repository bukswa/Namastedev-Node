async function hello() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    if (!response.ok) {
      throw new Error("Fetch Failed");
    }
    const result = await response.json();
    console.log({ result });
  } catch (error) {
    console.log("errr is:", error.message);
  }
}

hello();
