/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {Box} from 'native-base';
import {useState} from 'react';
import Item from '../../Pesaje/Item';

const PesajeTab = () => {
  const [pesajes, setPasajes] = useState([
    {
      id: 1,
      nro_sacos: 20,
      peso_neto: 200,
      peso_bruto: 220,
    },
    {
      id: 2,
      nro_sacos: 40,
      peso_neto: 1200,
      peso_bruto: 220,

    },
  ]);

  return (
    <Box >
      <Box mx={2} bg="white">
        {
          pesajes.map((pesaje: any) => (
            <Item pesaje={pesaje} key={pesaje.id}/>
          ))
        }
      </Box>
    </Box>
  );
};

export default PesajeTab;
