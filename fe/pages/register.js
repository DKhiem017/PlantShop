import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { AppContext } from "../../contexts/appContext";
import authAPI from "../../Api/AuthApi";
import ButtonMultiselect, { ButtonLayout } from "react-native-button-multiselect";

const Register = ({ navigation }) => {
  const { setUser, user } = useContext(AppContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [numberPhone, setNumberPhone] = useState("");
  const [form, setForm] = useState(false);

  const buttons = [
    { label: 'Monsera', value: 'Monsera' },
    { label: 'Cactus', value: 'Cactus' },
    { label: 'Aroid Palm', value: 'Aroid Palm' },
    { label: 'Phalaenopsis Orchids', value: 'Phalaenopsis Orchids' },
    { label: 'Snake Plant', value: 'Snake Plant' },
    { label: 'Succulent', value: 'Succulent' },
  ];

  const [selectedButtons, setSelectedButtons] = useState([]);

  const handleButtonSelected = (selectedValues) => {
    setSelectedButtons(selectedValues);
  };

  const HandleBack = () => {
    navigation.navigate("Login")
  }

  const HandleLogin = () => {
    navigation.navigate("Login");
  }

  const HandleRegister = async () => {
    if (!email || !password || !name) {
      return;
    }
    return await authAPI.registerCustomer(name, email, password, numberPhone)
      .then((res) => {
        setUser(res.data);
        setForm(true);
      })
      .catch((error) => {
        console.log("Error ", error);
      });
  }

  const HandleSubmit = async () => {
    return await authAPI.addPlants(user.id, selectedButtons)
      .then(() => {
        setForm(false);
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.log("Error ", error);
      });
  }

  return (
    <ScrollView
      style={{
        height: "100%",
        backgroundColor: "#E9F3ED",
        display: "flex",
        flexDirection: "column",
      }}
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      automaticallyAdjustKeyboardInsets={true}
    >
      <StatusBar style="dark"></StatusBar>
      <TouchableOpacity onPress={HandleBack}>
        <View
          style={{
            marginTop: 30,
            marginLeft: 10,
          }}
        >
          <AntDesign name="arrowleft" size={28} color="#498553" />
        </View>
      </TouchableOpacity>
      <View>
        <Text
          style={{
            fontSize: 25,
            marginStart: 35,
            marginTop: 20,
          }}
        >
          Welcome to
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 35,
            marginStart: 35,
            marginTop: 2,
            fontWeight: 700,
            color: "#498553",
          }}
        >
          PK Plant Store
        </Text>
      </View>
      <View
        style={{
          paddingStart: 35,
          paddingEnd: 35,
        }}
      >
        <TextInput
          placeholder="Name"
          style={{
            marginTop: 25,
            height: 45,
            backgroundColor: "#fff",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#498553",
            paddingStart: 10,
            fontSize: 15,
          }}
          value={name}
          onChangeText={(e) => setName(e)}
        ></TextInput>
        <TextInput
          placeholder="Email"
          style={{
            marginTop: 25,
            height: 45,
            backgroundColor: "#fff",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#498553",
            paddingStart: 10,
            fontSize: 15,
          }}
          value={email}
          onChangeText={(e) => setEmail(e)}
        ></TextInput>
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={{
            marginTop: 25,
            height: 45,
            backgroundColor: "#fff",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#498553",
            paddingStart: 10,
            fontSize: 15,
          }}
          value={password}
          onChangeText={(e) => setPassword(e)}
        ></TextInput>
        <TextInput
          placeholder="Phone number"
          style={{
            marginTop: 25,
            height: 45,
            backgroundColor: "#fff",
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#498553",
            paddingStart: 10,
            fontSize: 15,
          }}
          value={numberPhone}
          onChangeText={(e) => setNumberPhone(e)}
        ></TextInput>
        <TouchableOpacity
          style={{
            backgroundColor: "#498553",
            marginTop: 25,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
          onPress={HandleRegister}
        >
          <Text style={{ color: "#fff", fontSize: 15, fontWeight: 700 }}>
            Create an Account
          </Text>
        </TouchableOpacity>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 15,
          }}
        >
          <Text style={{ color: "#498553" }}>Already have an account? </Text>
          <TouchableOpacity onPress={HandleLogin}>
            <Text style={{ fontWeight: 700, color: "#498553" }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={form}
        onRequestClose={() => setForm(!form)}
      >
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
          <View style={{
            width: "90%",
            backgroundColor: 'white',
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: "center",
          }}>
            <Text style={{
              fontWeight: 700,
              fontSize: 16
            }}>
              Choose plants that you may care about
            </Text>
            <ButtonMultiselect
              containerStyle={{
                marginTop: 20,
                height: "50%",
                paddingHorizontal: 15,
              }}
              multiselect={true}
              buttons={buttons}
              layout={ButtonLayout.GRID}
              onButtonSelected={handleButtonSelected}
              selectedButtons={selectedButtons}
              selectedColors={{
                textColor: "white",
                backgroundColor: "#498553",
                borderColor: "#498553",
              }}
            />
            <TouchableOpacity
              style={{
                backgroundColor: "#498553",
                marginTop: 10,
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 10
              }}
              onPress={HandleSubmit}
            >
              <Text style={{ fontSize: 15, fontWeight: 700, color: "white" }}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default Register;
