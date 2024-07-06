cd ..
rm -r ./build/
mkdir -p ./build/
docker build -t codeigniter-react-project . 
container_id=$(docker create codeigniter-react-project)
docker cp $container_id:/build/ ./
docker rm $container_id