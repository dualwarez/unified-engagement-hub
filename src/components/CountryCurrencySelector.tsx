
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CountryCurrencyData {
  country: string;
  currency: string;
}

interface CountryCurrencySelectorProps {
  onSubmit: (data: CountryCurrencyData) => void;
  onBack?: () => void;
  defaultCountry?: string;
  defaultCurrency?: string;
}

const countryOptions = [
  { label: "🇮🇳 India - INR", value: "India|INR" },
  { label: "🇺🇸 United States - USD", value: "United States|USD" },
  { label: "🇬🇧 United Kingdom - GBP", value: "United Kingdom|GBP" },
  { label: "🇦🇺 Australia - AUD", value: "Australia|AUD" },
  { label: "🇨🇦 Canada - CAD", value: "Canada|CAD" },
  { label: "🇪🇺 European Union - EUR", value: "European Union|EUR" },
  { label: "🇸🇬 Singapore - SGD", value: "Singapore|SGD" },
  { label: "🇦🇪 UAE - AED", value: "UAE|AED" },
  { label: "🇯🇵 Japan - JPY", value: "Japan|JPY" },
  { label: "🌐 Other", value: "Other|Other" }
];

const CountryCurrencySelector: React.FC<CountryCurrencySelectorProps> = ({
  onSubmit,
  onBack,
  defaultCountry = "India|INR",
  defaultCurrency = "INR"
}) => {
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);
  const [currency, setCurrency] = useState(defaultCurrency);

  const handleCountryChange = (value: string) => {
    setSelectedCountry(value);
    const newCurrency = value.split('|')[1];
    setCurrency(newCurrency);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const countryName = selectedCountry.split('|')[0];
    onSubmit({
      country: countryName,
      currency: currency
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Select Country and Currency</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <Select value={selectedCountry} onValueChange={handleCountryChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                  {countryOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="currency">Currency</Label>
              <Input
                id="currency"
                value={currency}
                readOnly
                className="bg-gray-100 cursor-not-allowed"
              />
            </div>

            <div className="flex gap-3">
              {onBack && (
                <Button type="button" variant="outline" onClick={onBack} className="flex-1">
                  Back
                </Button>
              )}
              <Button type="submit" className="flex-1">
                Continue
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CountryCurrencySelector;
