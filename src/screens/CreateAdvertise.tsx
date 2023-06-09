import { Box, Center, HStack, Icon, ScrollView, Switch, Text, VStack, useTheme } from "native-base";
import { Header } from "../components/Header";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { Input } from "../components/Input";
import { Checkbox } from "../components/Checkbox";
import { PaymentOptions } from "../components/PaymentOptions";
import { useEffect, useState } from "react";
import { THEME } from "../theme";
import { Button } from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { HomeNavigatorRoutesProps } from "../routes/app.routes";

// TYPE passaaer esse cara aq por route props
type Props = {
  editAdvertise?: boolean;
}

export function CreateAdvertise({ editAdvertise = false }: Props) {
  const { colors } = THEME;
  const navigation = useNavigation<HomeNavigatorRoutesProps>();
  const [acceptTrade, setAcceptTrade] = useState(false);

  function handleGoBack() {
    navigation.goBack();
  }

  function handleNavigateToMyProductDetails() {
    navigation.navigate('MyProductDetailsScreen', editAdvertise && { interfaceType: 'preview' })
  }

  useEffect(() => {
    if (editAdvertise) {
      console.log('Função para popular o form')
    }
  }, [])

  return (
    <VStack w='full' h='full' bg='gray.600'>
      <Header
        title={editAdvertise ? "Editar Anúncio" : "Criar anúncio"}
        goBack
      />

      <ScrollView px='6' py='2' contentContainerStyle={{ paddingBottom: 56 }}>
        <Text
          color='gray.200'
          fontFamily='heading'
          fontSize='16'
        >
          Imagens
        </Text>
        <Text
          color='gray.300'
          fontFamily='body'
          fontSize='14'
        >
          Escolha até 3 imagens para mostrar o quanto o seu produto é incrível!
        </Text>

        {/* TODO fazer função para adicionar nova foto */}
        <Center w='24' h='24' bg='gray.500' borderRadius='md' mt='4' mb='8'>
          <TouchableOpacity onPress={() => console.log('Adicionando nova foto')} activeOpacity={0.8}>
            <Icon
              as={Ionicons}
              name='add'
              size='6'
              color='gray.400'
            />
          </TouchableOpacity>
        </Center>

        <Text
          color='gray.200'
          fontFamily='heading'
          fontSize='16'
        >
          Sobre o produto
        </Text>
        <Input
          placeholder="Título do anúncio"
        />

        <Input
          placeholder="Descrição do produto"
          multiline
          textAlignVertical="top"
          h='160'
        />

        <HStack justifyContent='space-between' mt='4' mb='8'>
          <Checkbox
            title="Produto novo"
          />

          <Checkbox
            title="Produto usado"
          />
        </HStack>

        <Text
          color='gray.200'
          fontFamily='heading'
          fontSize='16'
        >
          Venda R$
        </Text>
        <Input
          placeholder="Valor do produto"
        />

        <Text
          color='gray.200'
          fontSize='14'
          fontFamily='heading'
          mt='4'
        >
          Aceita troca?
        </Text>
        <Switch
          onValueChange={setAcceptTrade}
          value={acceptTrade}
          thumbColor={colors.blue[100]}
          trackColor={{ false: colors.gray[500], true: colors.blue.light }}
          style={{ alignSelf: 'flex-start', marginBottom: 16 }}
        />

        <Checkbox title='Boleto' />
        <Checkbox title='Pix' />
        <Checkbox title='Dinheiro' />
        <Checkbox title='Cartão de crédito' />
        <Checkbox title='Boleto bancário' />

        {/* TODO tirar tab navigator */}
        <HStack space='2' mt='10'>
          <Button
            w='48%'
            type="gray"
            title="Cancelar"
            onPress={handleGoBack}
          />
          <Button
            w='48%'
            type="black"
            title="Avançar"
            onPress={handleNavigateToMyProductDetails}
          />
        </HStack>
      </ScrollView>
    </VStack>
  );
}