import React from 'react';
import {View} from 'react-native';
import {Formik} from 'formik';
import {StringsConstants} from '../constants/applicationConstant';
import {styles} from '../theme/applicationStyle';
import Header from '../elements/Header';
import InputFields from '../elements/InputFields';
import Button from '../elements/Button';
import {useDispatch} from 'react-redux';
import {loginData} from '../redux/action';
import {loginSchema} from '../utils/validations';

export default function Login(props) {
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
  };
  return (
    <View style={styles.addMainView}>
      <Header name="LOGIN" style={{marginTop: 20}} />
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        key={props.index}
        onSubmit={(values) => {
            console.log('valuess', values)
            dispatch(loginData(values));
          props.navigation.navigate('Home');
        }}>
        {props => (
          <View style={{marginTop: 18}}>
            <InputFields
              minHeight={54}
              placeholder="Email"
              onChangeText={props.handleChange('email')}
              onBlur={props.handleBlur('email')}
              value={props.values.email}
              text={props.touched.email && props.errors.email}
            />
            <InputFields
              placeholder="Password"
              onChangeText={props.handleChange('password')}
              onBlur={props.handleBlur('password')}
              secureTextEntry={true}
              value={props.values.password}
              text={props.touched.password && props.errors.password}
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
