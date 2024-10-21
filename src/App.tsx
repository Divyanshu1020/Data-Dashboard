import { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Checkbox } from "./components/ui/checkbox";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";

import { ChevronDown, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";

const data = [
  {
    id: 1,
    fullName: "John Doe",
    modality: "Online",
    dataProvider: "Provider A",
    personalData: "Yes",
    terms: "Accepted",
    link: "https://example.com/1",
  },
  {
    id: 2,
    fullName: "Jane Smith",
    modality: "In-person",
    dataProvider: "Provider B",
    personalData: "No Personal Data",
    terms: "Pending",
    link: "https://example.com/2",
  },
  {
    id: 3,
    fullName: "Alice Johnson",
    modality: "Hybrid",
    dataProvider: "Provider C",
    personalData: "No Personal Data",
    terms: "Accepted",
    link: "https://example.com/3",
  },
  {
    id: 4,
    fullName: "Bob Williams",
    modality: "Online",
    dataProvider: "Provider A",
    personalData: "No",
    terms: "Rejected",
    link: "https://example.com/4",
  },
  {
    id: 5,
    fullName: "Charlie Brown",
    modality: "In-person",
    dataProvider: "Provider B",
    personalData: "Yes",
    terms: "Accepted",
    link: "https://example.com/5",
  },
  {
    id: 7,
    fullName: "John Doe",
    modality: "Online",
    dataProvider: "Provider A",
    personalData: "Yes",
    terms: "Accepted",
    link: "https://example.com/1",
  },
  {
    id: 8,
    fullName: "Jane Smith",
    modality: "In-person",
    dataProvider: "Provider B",
    personalData: "No Personal Data",
    terms: "Pending",
    link: "https://example.com/2",
  },
  {
    id: 9,
    fullName: "Alice Johnson",
    modality: "Hybrid",
    dataProvider: "Provider C",
    personalData: "No Personal Data",
    terms: "Accepted",
    link: "https://example.com/3",
  },
  {
    id: 10,
    fullName: "Bob Williams",
    modality: "Online",
    dataProvider: "Provider A",
    personalData: "No",
    terms: "Rejected",
    link: "https://example.com/4",
  },
  {
    id: 11,
    fullName: "Charlie Brown",
    modality: "In-person",
    dataProvider: "Provider B",
    personalData: "Yes",
    terms: "Accepted",
    link: "https://example.com/5",
  },
];

function App() {
  return (
    <div className=" h-full w-full">
      {/* **** HADER **** */}
      <header className="  h-[68px] border-b flex flex-row items-center justify-end " >
        <div className=" h-full text-lg px-11 flex flex-row items-center  gap-11">
          <div className="h-full text-[#141263] font-bold flex flex-col items-center justify-center">
            <span className="mt-auto">Data Source</span>
            <div className="mt-auto h-[4px] rounded-t-full w-full bg-[#141263]"></div>
          </div>
          <div>
            Selected
          </div>
          <div>
            Project
          </div>
        </div>
      </header>

      {/* **** BODY **** */}
      <main className=" h-[calc(100vh-70px)] w-full flex flex-row">
        {/* * **** left side  **** */}
        <aside className="  hidden lg:flex w-[25%] min-w-[330px] max-w-[380px] h-full">
          <Card className=" border-t-0 rounded-none h-full pt-[24px] pl-[48px] pr-[36px]">
            <CardContent>
              <h2 className="text-xl font-bold mb-5">Filters</h2>
              <form action="" className="flex flex-col gap-4">
                <Label
                  htmlFor="name"
                  className="text-lg font-normal text-[#3A3A3A]"
                >
                  Search by data source name
                </Label>
                <Input type="text" id="name" placeholder="MNIST" />

                <Label
                  htmlFor="spdx"
                  className="text-lg font-normal text-[#3A3A3A]"
                >
                  Filter by terms spdx ID
                </Label>
                <SelectInput />

                <Label
                  htmlFor=""
                  className="text-lg font-normal text-[#3A3A3A]"
                >
                  Filter by Modility
                </Label>
                <SelectInput />

                <div className=" flex flex-col gap-4">
                  <h6 className="text-lg font-normal text-[#3A3A3A]">
                    Filter by terms spdx ID
                  </h6>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="1" className=" border-[#767676]" />
                    <label
                      htmlFor="1"
                      className="text-base text-[#767676] font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Pulic
                    </label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="2" className=" border-[#767676]" />
                    <label
                      htmlFor="2"
                      className="text-base text-[#767676] font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Gated
                    </label>
                  </div>
                </div>

                <div className=" flex flex-col gap-4">
                  <h6 className="text-lg font-normal text-[#3A3A3A]">
                    Filter by terms spdx ID
                  </h6>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="3" className=" border-[#767676]" />
                    <label
                      htmlFor="3"
                      className="text-base text-[#767676] font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Anonymized
                    </label>
                  </div>

                  <div className="flex items-center space-x-2 flex=">
                    <Checkbox id="4" className=" border-[#767676]" />
                    <label
                      htmlFor="4"
                      className="text-base text-[#767676] font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      No personal data
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="5" className=" border-[#767676]" />
                    <label
                      htmlFor="5"
                      className="text-base text-[#767676] font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Personally Identification Information
                    </label>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </aside>

        <main className=" flex-1 flex flex-col w-full h-full pt-[24px] pl-[48px] pr-[32px] gap-5  ">
          <header>
            <h2 className="text-2xl font-bold">Data Source</h2>
          </header>

          <div className=" flex-1 border ">
            <DataTable />
          </div>

          <footer className="h-[36px] flex flex-row items-center justify-between">
            <div>
              <h6 className="flex flex-row items-center gap-2 text-base">
                <span>Result per page</span>
                <span className="font-bold">50</span>
                <ChevronDown />
              </h6>
            </div>
            <div>
              <h6 className="flex flex-row items-center gap-2 text-base">
                <ChevronLeft />
                <span>2 of 10</span>
                <ChevronRight />
              </h6>
            </div>
          </footer>
        </main>
      </main>
    </div>
  );
}

function DataTable() {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedRows(data.map((row) => row.id));
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (id: number, checked: boolean) => {
    if (checked) {
      setSelectedRows([...selectedRows, id]);
    } else {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    }
  };

  const isRowSelected = (id: number) => selectedRows.includes(id);
  const isAllSelected = data.length > 0 && selectedRows.length === data.length;

  return (
    <div className="w-full overflow-auto">
      <Table>
        <TableHeader className="bg-[#141263] text-white">
          <TableRow>
            <TableHead className="w-[53px] ">
              <Checkbox
                checked={isAllSelected}
                onCheckedChange={handleSelectAll}
                aria-label="Select all rows"
                className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#141263] "
              />
            </TableHead>
            <TableHead className="text-white">Full Name</TableHead>
            <TableHead className="text-white">Modality</TableHead>
            <TableHead className="text-white">Data Provider</TableHead>
            <TableHead className="text-white">Personal Data</TableHead>
            <TableHead className="text-white">Terms</TableHead>
            <TableHead className="text-white">Links</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-[#3A3A3A] text-base">
          {data.map((row, index) => (
            <TableRow
              key={row.id}
              className={`${index % 2 === 1 ? "bg-muted" : ""} h-[60px]`}
            >
              <TableCell>
                <Checkbox
                  checked={isRowSelected(row.id)}
                  onCheckedChange={(checked) =>
                    handleSelectRow(row.id, checked as boolean)
                  }
                  aria-label={`Select row ${row.id}`}
                  className="border-[#3A3A3A] data-[state=checked]:bg-[#141263] "
                />
              </TableCell>
              <TableCell>{row.fullName}</TableCell>
              <TableCell>{row.modality}</TableCell>
              <TableCell>{row.dataProvider}</TableCell>
              <TableCell>{row.personalData}</TableCell>
              <TableCell>{row.terms}</TableCell>
              <TableCell>
                <a
                  href={row.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-primary hover:underline"
                >
                  Link <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export function SelectInput() {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="MNIST" className="text-pink-700" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default App;
