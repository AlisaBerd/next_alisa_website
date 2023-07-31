export async function sendMessage (email, user_name, input_text) {
  let response = await fetch('https://alisapi.digitalberd.com/add_message', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
      email: email,
      user_name: user_name,
      input_text: input_text
    })
  });

  let result = await response.json();
}
