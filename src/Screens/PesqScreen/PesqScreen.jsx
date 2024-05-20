import { View, Text, SafeAreaView, Image, TextInput, FlatList, SectionList } from 'react-native'
import React, { useState} from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import styles from '../PesqScreen/styles';
import Colors from '../../Utils/Colors';
import { Ionicons } from 'react-native-vector-icons';



const dataPatrocinados = [
  {
    id: '1',
    imageUrl: 'https://blog.ebaconline.com.br/blog/wp-content/uploads/2022/12/edptt4frrzbpknuf6ra99-e1674746309883.png',
    title: 'Fotógrafo',
    local: ' Nova Olinda, Castanhal - PA',
    NameSub: 'Davi',
    description: 'Olá, meu nome é Davi e sou fotógrafo. Tenho 25 anos e a fotografia é a minha grande paixão. Como fotógrafo, gosto de me descrever como versátil. Meu portfólio inclui desde fotografias de casamento emocionantes e retratos intimistas até moda estilizada e projetos documentais. Para mim, cada fotografia deve contar uma história e transmitir uma emoção autêntica.',
    services: 'Fotografia de produtos, paisagens e eventos.',
    money: '300 por dia',
    postImage1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzd278SVqiGFV8gkBpB65BVn-Z8u8KqwW7loc5H-TE1g&s',
    postImage2: 'https://blog.ebaconline.com.br/blog/wp-content/uploads/2022/12/edptt4frrzbpknuf6ra99-e1674746309883.png',
    postImage3: 'https://i.em.com.br/IQ1l_dkc9VYK5P8PW-EaTphOuF4=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/05/21/1496049/uma-cor-que-esta-totalmente-proibida-para-as-convidadas-de-acordo-com-a-etiqueta-de-casamento-e-o-branco-que-esta-reservado-para-as-noivas-a-nao-ser-que-o-casamento-seja-na-praia_1_55583.jpg',
    postImage4: 'https://inteligenciafinanceira.com.br/wp-content/uploads/2023/10/quanto-custa-um-casamento.jpg',
    estrela: 4,
  },
  {
    id: '2',
    imageUrl: 'https://static.vecteezy.com/ti/fotos-gratis/p1/6853663-asiatico-adolescente-mulher-trabalhe-e-estudo-online-via-internet-em-casa-gratis-foto.jpg',
    title: 'Programadora',
    local: ' Imperador, Castanhal - PA',
    NameSub: 'Eyko Hiroshi',
    description: 'Olá! Meu nome é Eyko e sou uma programadora apaixonada por transformar linhas de código em soluções criativas e inovadoras. Sou apaixonada por desafios e não há nada mais gratificante para mim do que ver um projeto ganhar vida através do meu código.',
    services: 'Dev Back-End, C#, Python',
    money: '300 por dia',
    postImage1: 'https://static.vecteezy.com/ti/fotos-gratis/p1/6853663-asiatico-adolescente-mulher-trabalhe-e-estudo-online-via-internet-em-casa-gratis-foto.jpg',
    estrela: 5,
  },

  {
    id: '3',
    imageUrl: 'https://st.depositphotos.com/1049184/1457/i/450/depositphotos_14570971-stock-photo-smiley-charlady-with-rug-and.jpg',
    title: 'Faxineira',
    local: ' Castanheira, Belém - PA',
    NameSub: 'Juraci Santana',
    description: 'Olá, sou Juraci e amo limpeza. Hoje em dia este é meu modo de sustento e me sinto orgulhosa por trabalhar organizando.',
    services: 'Limpeza de casas e apartamentos.',
    money: '50 por hora',
    postImage1: 'https://medlimp.com.br/wp-content/uploads/2021/07/produtos-de-limpeza-profissional.jpg',
    postImage2: 'https://copapel.com.br/images/blog/1660840437limpeza-1.jpg',
    postImage3: 'https://st3.depositphotos.com/1735158/33428/i/450/depositphotos_334283806-stock-photo-gloved-hand-cleaning-window-rag.jpg',
    estrela: 3,
  },
];

const dataNaoPatrocinados = [
  {
    id: '1',
    imageUrl: 'https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia28380/jardineiro-cpt.jpg',
    title: 'Jardinagem',
    local: ' Nova Olinda, Castanhal - PA',
    NameSub: 'Jorge Flor',
    description: 'Olá sou Jorge Flor, sou jardineiro por amor, trabalho com podagem, limpeza e roçagem. Amo o cuidado com plantas e jardins.',
    services: 'Podagem, limpeza e roçagem',
    money: '50 por hora',
    postImage1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIhqWIGZIlXX6KrokuheOZiuLuvIiJpeI9C0OX5Tioyw&s',
    postImage2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoZiwerJSYB7TECvaVur3CgrmzEpUYO4Yd8eza7ikG2w&s',
    postImage3: 'https://i.pinimg.com/736x/38/4f/69/384f69a701221546547a7124708e0b7e.jpg',
    estrela: 4.5,
  },
  {
    id: '2',
    imageUrl: 'https://thumbs.dreamstime.com/b/homem-pregando-fundo-do-trabalhador-consertar-coisas-ferramentas-relacionadas-%C3%A0-casa-224207028.jpg',
    title: 'Carpinteiro',
    local: ' Imperador, Castanhal - PA',
    NameSub: 'Ruan Amalri',
    description: 'Sou Amalri, e trabalho desde jovem com carpintaria, faço ideias criativas para qualquer lugar.',
    services: 'Carpintagem, peças, casas e móveis.',
    money: '50 por hora',
    postImage1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGPiR4Hm3iPaVRw1Qp8yzqsI14I-4EpUQlU-DIzJDDWA&s',
    postImage2: 'https://www.zarla.com/images/zarla-carpentry-logos-5998x3028-20210629.jpeg?crop=21:16,smart&width=420&dpr=2',
    postImage3: 'https://img.freepik.com/vetores-premium/ilustracao-de-desenho-animado-de-carpinteiro-desenhado-a-mao_52683-148514.jpg',
    estrela: 3.5,
  },

  {
    id: '3',
    imageUrl: 'https://media.istockphoto.com/id/1334005366/pt/foto/portrait-young-woman-smiling-on-yellow-background.jpg?s=612x612&w=0&k=20&c=g04Edy8itF0Y5fYIFKaHwRr4vC1ApRl6YemlbfPOXrA=',
    title: 'Faxina',
    local: ' Castanheira, Belém - PA',
    NameSub: 'Bia Alexandrina',
    description: 'Olá sou Biatriz e faço serviço de faxina, principalmente em apartamentos, mas extendo meus serviços há casas e prédios comerciais.',
    services: 'Limpeza de casas e apartamentos.',
    money: '50 por hora',
    postImage1: 'https://endtreinamentus.com.br/wp-content/uploads/2017/12/cropped-missao-valores-fundo-sem-nada-150x150.png',
    postImage2: 'https://endtreinamentus.com.br/wp-content/uploads/2017/12/cropped-missao-valores-fundo-sem-nada-150x150.png',
    postImage3: 'https://endtreinamentus.com.br/wp-content/uploads/2017/12/cropped-missao-valores-fundo-sem-nada-150x150.png',
    estrela: 2,
  },
  {
    id: '4',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Social Mídia',
    local: ' Juazeiro, Santa Izabel - PA',
    NameSub: 'Regina Lira',
    description: 'Olá! Sou Regina e sou uma profissional apaixonada por Social Media. Tenho experiência em criar e gerenciar conteúdo para diversas plataformas, incluindo Facebook, Instagram, Twitter e LinkedIn. Meu objetivo é sempre desenvolver estratégias de conteúdo que não apenas aumentem a visibilidade da marca, mas também criem uma comunidade engajada e leal. Adoro a combinação de criatividade e análise que este trabalho exige, permitindo-me experimentar novas ideias e medir seu impacto em tempo real.',
    services: 'Gerência de mídias sociais',
    money: '50 por hora',
    postImage1: 'https://endtreinamentus.com.br/wp-content/uploads/2017/12/cropped-missao-valores-fundo-sem-nada-150x150.png',
    postImage2: 'https://endtreinamentus.com.br/wp-content/uploads/2017/12/cropped-missao-valores-fundo-sem-nada-150x150.png',
    postImage3: 'https://endtreinamentus.com.br/wp-content/uploads/2017/12/cropped-missao-valores-fundo-sem-nada-150x150.png',
    estrela: 0,
  },
  {
    id: '5',
    imageUrl: 'https://images.unsplash.com/photo-1642257859842-c95f9fa8121d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Contabilidade',
    local: ' 1901 Thornridge Cir. Shiloh, Hawaii 81063',
    NameSub: 'Rubens',
    description: 'Olá sou Rubens e trabalho com contabilidade, sempre proto para novos desafios busco otimizar o setor financeiro de uma empresa.',
    services: 'Contabilidade',
    money: '50 por hora',
    postImage1: 'https://endtreinamentus.com.br/wp-content/uploads/2017/12/cropped-missao-valores-fundo-sem-nada-150x150.png',
    postImage2: 'https://endtreinamentus.com.br/wp-content/uploads/2017/12/cropped-missao-valores-fundo-sem-nada-150x150.png',
    postImage3: 'https://endtreinamentus.com.br/wp-content/uploads/2017/12/cropped-missao-valores-fundo-sem-nada-150x150.png',
    estrela: 5,
  },
  {
    id: '6',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Advogada',
    local: ' Centro, Abaetetuba - PA',
    NameSub: 'Mariana',
    description: 'Trabalho com advocacia voltada para os direitos trabalhistas.',
    services: 'Advocacia trabalhista',
    money: '50 por hora',
    postImage1: 'https://endtreinamentus.com.br/wp-content/uploads/2017/12/cropped-missao-valores-fundo-sem-nada-150x150.png',
    postImage2: 'https://endtreinamentus.com.br/wp-content/uploads/2017/12/cropped-missao-valores-fundo-sem-nada-150x150.png',
    postImage3: 'https://endtreinamentus.com.br/wp-content/uploads/2017/12/cropped-missao-valores-fundo-sem-nada-150x150.png',
    estrela: 3,
  },
];

const Item = ({item, navigation}) => (

  <View style={styles.item}>
    <View style={styles.ContainerImage}>
      <TouchableOpacity onPress={() => navigation.navigate('ExteProfile', { Nome: item.NameSub, 
                                                                            Imagem: item.imageUrl,
                                                                            Titulo: item.title,
                                                                            Servicos: item.services,
                                                                            Descricao: item.description,
                                                                            postagem1: item.postImage1,
                                                                            postagem2: item.postImage2,
                                                                            postagem3: item.postImage3,
                                                                            postagem4: item.postImage4,
                                                                            Estrelas: item.estrela,
                                                                            })}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
      </TouchableOpacity>
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.title} onPress={() => navigation.navigate('JobsDesc', {
        JobTitle: item.title,
        JobLocal: item.local,
        JobDate: item.data,
        JobDesc: item.description,
        JobRequisite: item.requisite,
        JobMoney: item.money,
        JobSub: item.NameSub
      })}>
        {item.title}</Text>
      <Text style={styles.subtitle}>
        <Ionicons
          name="location-sharp"
          size={10}
          color="write"
          onPress={() => { }}
        />
        {item.local}</Text>
    </View>

    <View style={styles.Button}>
      <Text style={styles.buttomText} onPress={() => navigation.navigate('Chat', { contactName: item.NameSub })}> Chat </Text>
    </View>
  </View>

);

const Filter = [
  { id: 1, name: "Empresas" },
  { id: 2, name: "Pessoas" },
  { id: 3, name: "Cargos" }
];

const sections = [
  { title: "Patrocinados", data: dataPatrocinados },
  { title: "Não patrocinados", data: dataNaoPatrocinados }
];

export default function PesqScreen() {

  const [useFilter, setUseFilter] = useState([]);
  const [Options, setOptions] = useState();
  const [userType, setUserType] = useState();
  const [pickerVisible, setPickerVisible] = useState(false);
  const [text, setText] = useState("");
  const navigation = useNavigation();
  const [searchWord, setSearchWord] = useState('');

  return (

    <SafeAreaView>


      <View style={{backgroundColor: Colors.MALTE, height: 100}}>
        <View style={styles.viewBusca}>

          <TextInput style={styles.inputBusca} placeholder="Pesquisar"
            autoCapitalize='none'
            autoCorrect={false}
            value={text}
            onChangeText={(value) => setText(value)}
          />

         <TouchableOpacity style={{margin: 10}}>
            <Image source={require('../../../assets/images/icon-search.png')} style={{height: 20, width: 20 }}/>
        </TouchableOpacity> 

        </View>
      </View>
      <View style={styles.boxTitle}>

        <Text style={styles.textTitle}>Prestadores</Text>

        <TouchableOpacity onPress={() => setPickerVisible(!pickerVisible)}>
          <Text style={styles.textFiltrar}>Filtrar</Text>
        </TouchableOpacity>
        {pickerVisible && (
          <Picker
          selectedValue={userType}
          onValueChange={(itemValue) => setUserType(itemValue)}
          style={styles.picker}
          >
          <Picker.Item label="Pessoa" value="Pessoa" />
          <Picker.Item label="Profissão" value="Profissão" />
        </Picker>
        )}

      </View>
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item.id + index}
        renderItem={({ item }) => <Item item={item} navigation={navigation} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
      />
    </SafeAreaView >
  )
}