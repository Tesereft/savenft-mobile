import { Collection } from "../interfaces/collection.typing";
import axios from "axios";

export const API = axios.create({
  baseURL: "https://9394-189-69-51-53.sa.ngrok.io/",
});

export const getCollectionAction = (id: string): Promise<INFTData[]> => {
  return new Promise((resolve, reject) => {
    return API.get(`blockchain/${id}`)
    .then((res) => {
      const remastered = res.data.map((nft: INFTData) => {

        nft.metadata.image = 
        nft.metadata.image
        .replace('ipfs://', 'https://ipfs.io/ipfs/');

        return nft;
      })
      resolve(remastered);
    }).catch((err) => {
      reject(err);
    });
  })
}

export const createCollectionAction = (data: any): 
Promise<string> => {
  return new Promise((resolve, reject) => {
    return API.post(`collection`, data).then((res) => {
      resolve(res.data.id);
    }).catch((err) => {
      reject(err);
    })
  })
}

export const loadCollectionAction = (id: any): Promise<Collection> => {
  return new Promise((resolve, reject) => {
    return API.get(`collection/?id=${id}`)
    .then((res) => {
      resolve(res.data);
    })
    .catch((err) => {
      reject(err);
    });
  })
}

export const rateACollectionAction = (data: any): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    return API.post(`rating`, data).then((res) => {
      resolve(true);
    })
    .catch((err) => {
      reject(err);
    });
  })
}