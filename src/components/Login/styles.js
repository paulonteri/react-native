import { StyleSheet, Dimensions } from 'react-native';
import tailwind from 'tailwind-rn';

// Playing around with styles
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  containerText: tailwind('bg-blue-200 p-3 rounded-full mt-40 mb-1'),
  text: tailwind('text-blue-800 font-semibold'),
  // form
  formView: {
    height: Dimensions.get('window').height / 2.1,
    width: Dimensions.get('window').width / 1.1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 30,
    paddingTop: 20,
    paddingBottom: 70,
    justifyContent: 'space-around',
  },
  formView2: tailwind(''),
  formInputView: tailwind('w-11/12'),
  formText: tailwind('text-gray-700 text-base font-bold'),
  formInput: tailwind(
    'w-full bg-gray-200 my-2 border-2 border-gray-200 rounded py-3 px-4 text-gray-700 text-base',
  ),
  formButton: tailwind(
    'bg-blue-500 text-white font-bold py-2 px-4 rounded mb-3',
  ),
});

// form styles
export const formViewStyles = StyleSheet.compose(
  styles.formView2,
  styles.formView,
);
