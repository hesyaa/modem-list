const {colours} = require('../../../Utils');

module.exports = {
  container: {
    padding: 20,
    backgroundColor: colours.primary,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  image: {
    width: 18,
    height: 29,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colours.secondary,
    marginVertical: 8,
  },
  checkout: {
    padding: 10,
    borderRadius: 20,
    color: 'white',
    marginTop: 5,
  },
  textBtn: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  btnReset: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 20,
    padding: 8,
    alignItems: 'center',
    marginTop: 8,
    zIndex: 0,
  },
  coverFooter: {
    backgroundColor: 'white',
    padding: 15,
    position: 'absolute',
    bottom: -35,
    width: '100%',
    elevation: 8,
    paddingVertical: 13,
  },
  //list
  menuBtn: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    width: 177,
    justifyContent: 'space-between',
    padding: 5,
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
  },
  btn: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  btnAdd: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3A4144',
    borderRadius: 8,
  },
  coverList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: '92%',
    padding: 5,
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  imgstye: {
    width: 70,
    height: 120,
  },
};
