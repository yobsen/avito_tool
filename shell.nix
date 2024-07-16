with import <nixpkgs> {};
stdenv.mkDerivation {
  name = "node-env";
  buildInputs = [
    nodejs-20
  ];
}
