const name = "Bram";
const clientCount: number = 4;
const isActive: boolean = true;

const clientCount: number = "four"; // red squiggle!

interface Client {
  name: string;
  city: string;
  active: boolean;
}

const c: Client = {
  name: "PT Maju Jaya",
  city: "Jakarta",
  active: true,
};
