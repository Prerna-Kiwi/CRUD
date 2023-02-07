import React from 'react';
import {View} from 'react-native';
import {Formik} from 'formik';
import {addUser, editUser} from '../redux/action';
import {useDispatch, useSelector} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import {StringsConstants} from '../constants/applicationConstant';
import {styles} from '../theme/applicationStyle';
import Header from '../elements/Header';
import InputFields from '../elements/InputFields';
import Button from '../elements/Button';
import {reviewSchema} from '../utils/validations';

export default function AddUser(props) {
  const dispatch = useDispatch();
  const {userList} = useSelector(state => state.listReducer);
  const {
    params: {item, isEdit, isAdded},
  } = useRoute();
  const initialValues = {
    id: isAdded ? '' : item.id,
    name: isAdded ? '' : item.name,
    email: isAdded ? '' : item.email,
    gender: isAdded ? '' : item.gender,
    status: isAdded ? '' : item.status,
  };
  return (
    <View style={styles.addMainView}>
      <Header
        name={isEdit ? StringsConstants.EDIT_USER : StringsConstants.ADD_USER}
        center
        leftIcon
      />
      <Formik
        initialValues={initialValues}
        validationSchema={reviewSchema}
        key={props.index}
        onSubmit={values => {
          isEdit && item
            ? values.id === item.id && dispatch(editUser(values))
            : (userList.length === 0
                ? (values.id = 1)
                : (values.id = userList[userList.length - 1].id + 1)) &&
              dispatch(addUser(values));
          props.navigation.navigate('Home');
          console.log('Userlist.length', userList.length);
        }}>
        {props => (
          <View>
            <InputFields
              placeholder="Name"
              onChangeText={props.handleChange('name')}
              onBlur={props.handleBlur('name')}
              value={props.values.name}
              text={props.touched.name && props.errors.name}
            />
            <InputFields
              minHeight={54}
              placeholder="Email"
              onChangeText={props.handleChange('email')}
              onBlur={props.handleBlur('email')}
              value={props.values.email}
              text={props.touched.email && props.errors.email}
            />
            <InputFields
              placeholder="Gender"
              onChangeText={props.handleChange('gender')}
              onBlur={props.handleBlur('gender')}
              value={props.values.gender}
              text={props.touched.gender && props.errors.gender}
            />
            <InputFields
              placeholder="status"
              onChangeText={props.handleChange('status')}
              onBlur={props.handleBlur('status')}
              value={props.values.status}
              text={props.touched.status && props.errors.status}
            />
            <Button
              name={StringsConstants.SUBMIT}
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}
