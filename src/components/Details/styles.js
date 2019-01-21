import styled from 'styled-components';

export const Container =  styled.View`
    background:#FFF;
    height:300px;
    width:100%;
    position:absolute;
    bottom:0;
    shadow-color:#000;
    shadow-offset: 0 0;
    shadow-opacity: 0.2;
    shadow-radius:10;
    elevation:3;
    border:1px solid #DDD;
    align-items:center;
    padding:20px
`;

export const TypeTitle = styled.Text`
    color:#222;
    font-size:20px;
`;

export const TypeDescription = styled.Text`
    color:666;
    font-size:14px
`;

export const TypeImage = styled.Image`
    height:80px;
    margin:10px
`;

export const RequestButton = styled.TouchableOpacity`
    background:#222;
    justify-content:center;
    align-items:center;
    height:44px;
    align-self:stretch;
    margin-top:10px;
`;
export const RequestButtonText = styled.Text`
    color:#FFF;
    font-weight:bold;
    font-size:14
`;