const {colours} = require('../../../Utils');

module.exports = {
  containerIndex: {
    alignItems: 'center',
    marginTop: 20,
    display: 'flex',
    height: '100%',
  },
  CHeader: {
    padding: 20,
    backgroundColor: colours.primary,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  THeader: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
  },
  container: {
    alignItems: 'center',
    marginTop: 20,
    display: 'flex',
    height: '100%',
  },
  listName: {
    width: '100%',
    fontSize: 18,
    fontWeight: 'bold',
    color: colours.secondary,
  },
  coverName: {
    flexDirection: 'column',
    width: '45%',
    marginVertical: 5,
  },
  listModem: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 10,

    elevation: 5,
  },
  indicatorcover: {
    height: 20,
    width: 100,
    backgroundColor: '#EDEDED',
    borderRadius: 15,
  },
  contentCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textUsage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
};
