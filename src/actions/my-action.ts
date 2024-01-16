interface ActionProps {
  amount: number;
}

export default async function MyAction(
  actionProps: ActionProps,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  env: {
    // public and private plugin settings are here
    ENVIRONMENT: "production" | "staging" | "preview";
  }
): Promise<Response> {

  // sleep for 100ms (don't do this, this is just an example)
  await new Promise((resolve) => setTimeout(resolve, 100));

  return new Response(JSON.stringify(actionProps.amount), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
