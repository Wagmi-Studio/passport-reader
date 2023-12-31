export type Certificate = {
  signatureAlgorithm: string;
  publicKey: {
    /*
     * The modulus in hexadecimal form.
     **/
    modulus?: string;
    /*
     * The public exponent in hexadecimal form.
     **/
    exponent?: string;
  };
};

export const certificates = {
  FR: {
    2015: {
      signatureAlgorithm: 'SHA256withRSA',
      publicKey: {
        modulus:
          'aa55588329ece95c591d5e7aaa621e78ac78b484f2f23e442e97689f9e0c5c42917be63cd3be01ed00532dacfe009461353571e713e69e0dfd4e78e35e9ccbc3370480fe4bcab3520a0460e73adad7f33da4586eaefea4649282360594af16d7ef51745f94cbe4d645d27a5e7054707aaeae588efb99a33405f41717d54d035353f4cb8bd80b809dbc27bf73503900779b678c824cdaa9f3b66085eaa0023c61bc0a71a51c0785d34930bf0a789db0598d560b83750f7b8be18b3e1d766e575fc28902975976e40898fcce8749fa198d2197fc2e22e8fac342096c24e61eb0dae5d73a521602499fb80c0c85996924fde12f4c0362fcfcc2b7e2c59459ea6ebd703db41721387a9600cff5a9aecd33e2e8fa384bc2d6db4f5e4801aabea76392cee78a223781bf90c3ed91db9b28f79383d5caed39b107a4b68ea44572c8307f3083ba11e8773ae8f56b9d4ab63ac714267fc806b7b2fe252260a8071fe106a278c710845cf2efce6ddc9f65e32bb97306e132d308037d5d3803af23e52799aace90d58dbb8735eeb2dcf0f4bd5506bc0f4ac77238baa5640afe6172a16e4767aebc84d1e9f98464faa37a8bc0b7005668bc9ca7ab947991690f8537c12ec2fb46621ffb33c2c20b20475fa09f7a8a531bb8e6010fcc8fb4ee967e54d765d948bb71b8343f157c5df1df4665f0f05eda1c577f7216fa0743aca0dee37cc0a0eb',
        exponent: '10001',
      },
    } as Certificate,
  },
};
