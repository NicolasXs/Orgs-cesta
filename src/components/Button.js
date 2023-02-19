import { StyleSheet, TouchableOpacity } from "react-native";

import Texto from "../../../components/Texto";

export default function Button() {
  return (
    <>
      <TouchableOpacity activeOpacity={0.8} style={estilos.botao}>
        <Texto style={estilos.textoBotao}>{botao}</Texto>
      </TouchableOpacity>
    </>
  );
}

const estilos = StyleSheet.create({
  botao: {
    marginTop: 16,
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 6,
  },
  textoBotao: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  },
});
