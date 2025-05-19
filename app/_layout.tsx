// import { Stack } from "expo-router";
// import './global.css'
// import FlashMessage from "react-native-flash-message";
// export default function RootLayout() {
//   return <Stack >

//     <Stack.Screen
//       name="(tabs)"
//       options={{
//         headerShown: false,
//       }}
//     />
//     {/* <Stack.Screen
//       name="about"

//       options={{ headerShown: false }}
//     />
//     <Stack.Screen
//       name="movie/[id]"
//       options={{
//         headerShown: false,
//       }}
//     />
//     <Stack.Screen
//       name="user/[id]"
//       options={{
//         headerShown: false,
//       }}
//     /> */}
//   </Stack>



//     ;
// }
import { Stack } from "expo-router";
import './global.css';
import Toast from 'react-native-toast-message'; // <-- Import Toast

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>

      {/* Add Toast here */}
      <Toast />
    </>
  );
}
