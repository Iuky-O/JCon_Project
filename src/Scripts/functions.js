

    export const [userData, setUserData] = useState(null);

        useEffect(() => {
            async function fetchUserData() {
              try {
                const db = getFirestore();
                const usersCollection = collection(db, "usuarios");
                const q = query(usersCollection, where("Name", "==", "Jenny Cooper")); // Substitua "Jane Cooper" pelo nome do usuário que você deseja buscar
        
                const querySnapshot = await getDocs(q);
                const userDataArray = querySnapshot.docs.map(doc => doc.data());
                setUserData(userDataArray[0]); // Se houver apenas um usuário com o nome fornecido, você pode acessá-lo diretamente pelo índice 0
              } catch (error) {
                console.error("Erro ao buscar dados do usuário:", error);
              }
            }
        
            fetchUserData();
          }, []);
