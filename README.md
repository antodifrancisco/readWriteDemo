## Information

- This is a NextJS, javascript project built using the `npx thirdweb create app` command

- Private key: I am reading my private key from the dev file in the config folder which I am not committing to Git. Feel free to either add the dev.js file in the config folder or replace keys.ThirdWebprivateKey with your key

- Contract: I deployed the contract via CLI and you can see the address in the code

- Use case: everything happens on the server side, meaning that it is the owner of the smart contract that will communicate with it via ThirdWeb SDK and using the data sent by the user.

- UI: In the UI, there is a simple Write button that writes some random strings in the smart contract and a simple Read button which should read the data. I am using tokenID = 10 as an example of writing and reading info related to that token. The results of the calls are logged in the console

As of now, using `onlyRole(DEFAULT_ADMIN_ROLE)` works for the write function but it gives me a permission error in the read function
