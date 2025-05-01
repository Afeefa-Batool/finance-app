// import { Tabs } from 'expo-router';
// import { Image, View, Text } from 'react-native';
// import { icons } from '@/constants/icons';

// export default function TabsLayout() {
//   return (
//     <Tabs
//       screenOptions={{
//         tabBarStyle: {
//           backgroundColor: '#0D081B',
//           height: 70,
//           margin: 20,
//           marginBottom: 30,
//           borderRadius: 50,
//           borderTopWidth: 0,
//           paddingHorizontal: 10,
//           shadowColor: '#000',
//           shadowOffset: { width: 0, height: 2 },
//           shadowOpacity: 0.3,
//           shadowRadius: 5,
//           elevation: 5,
//         },
//         tabBarLabel: () => null,
//         headerShown: false,
//       }}
//     >
//       <Tabs.Screen
//         name="index"
//         options={{
//           tabBarIcon: ({ focused }) =>
//             focused ? (
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   alignItems: 'center',
//                   backgroundColor: '#D3BFFF',
//                   borderRadius: 80,
//                   paddingHorizontal: 18,
//                   paddingVertical: 8,
//                   marginTop:25,
//                 }}
//               >
//                 <Image
//                   source={icons.home}
//                   style={{ width: 20, height: 20, tintColor: '#151312', marginRight: 6 }}
//                 />
//                 <Text style={{ color: '#151312', fontWeight: 'bold' }}>Home</Text>
//               </View>
//             ) : (
//               <Image
//                 source={icons.home}
//                 style={{ width: 20, height: 20, tintColor: '#ccc' }}
//               />
//             ),
//         }}
//       />

//       <Tabs.Screen
//         name="search"
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <Image
//               source={icons.search}
//               style={{
//                 width: 20,
//                 height: 20,
//                 tintColor: focused ? '#A48DFF' : '#ccc',
//                 marginTop:25,
//               }}
//             />
//           ),
//         }}
//       />

//       <Tabs.Screen
//         name="saved"
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <Image
//               source={icons.save}
//               style={{
//                 width: 20,
//                 height: 20,
//                 tintColor: focused ? '#A48DFF' : '#ccc',
//                 marginTop:25,
//               }}
//             />
//           ),
//         }}
//       />

//       <Tabs.Screen
//         name="profile"
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <Image
//               source={icons.person}
//               style={{
//                 width: 20,
//                 height: 20,
//                 tintColor: focused ? '#A48DFF' : '#ccc',
//                 marginTop:25,
//               }}
//             />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }
import { Tabs } from 'expo-router';
import { Image, View, Text } from 'react-native';
import { icons } from '@/constants/icons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#0D081B',
          height: 70,
          position: 'absolute',
          bottom: 0,
          left: 20,
          right: 20,
          borderRadius: 50,
          borderTopWidth: 3,
          borderBottomWidth: 3,
          paddingHorizontal: 10,
          paddingTop: 10, 
          borderWidth: 2,
          borderColor: '#A020F0', 
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 5,
          elevation: 5,
        },
        
        tabBarLabel: () => null,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: '#D3BFFF',
                  borderRadius: 80,
                  paddingHorizontal: 18,
                  paddingVertical: 8,
                }}
              >
                <Image
                  source={icons.home}
                  style={{ width: 20, height: 20, tintColor: '#151312', marginRight: 6 }}
                />
                <Text style={{ color: '#151312', fontWeight: 'bold' }}>Home</Text>
              </View>
            ) : (
              <Image
                source={icons.home}
                style={{ width: 20, height: 20, tintColor: '#ccc' }}
              />
            ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.search}
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? '#A48DFF' : '#ccc',
              }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="saved"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.save}
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? '#A48DFF' : '#ccc',
              }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.person}
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? '#A48DFF' : '#ccc',
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
