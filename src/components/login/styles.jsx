import { StyleSheet } from "react-native";



export default StyleSheet.create({

  body: {
    flex: 1
  },


  containerMain: {
    height: '100%',
    with: '100%'
  },


  containerInfo: {
    alignItems: 'center',
    height: 'auto',
    marginBottom: 140,
    padding: 40,
  },


  contentMain: {
    alignItems: 'center',
    borderRadius: 10,
    height: "auto",
    padding: 20,
    with: "auto"
  },



  input: {
    width: 300,
    height: 50,
    marginTop: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#6BA995",
    marginLeft: 'auto',
    marginRight: 'auto',
    color: "#0BF5AB"
  },


  containerBtn: {
    alignItems: 'center',
    backgroundColor: 'rgba(6, 12, 127, 0.8)',
    height: 40,
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 30,
    width: 140,
  },


  openModal: {
    backgroundColor: 'rgba(6, 12, 127, 0.3)',
    height: 'auto',
    marginTop: 30,
    width: 'auto',
  },

  modalContent: {
    alignItems: 'center',
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  },


  textMain: {
    color: '#3AF1A3',
    fontWeight: 'bold',
    fontSize: 28
  },


  textInfo: {
    color: '#3AF1A3',
    fontWeight: 'bold',
    fontSize: 14,
  },


  textAlert: {
    color: '#BBD441',
    fontSize: 14
  },






});

