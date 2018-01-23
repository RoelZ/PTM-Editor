import { MapTypeStyle } from "@agm/core/services/google-maps-types";

export class Style {
    id: number;
    name: string;
    icon: string;
    style: MapTypeStyle[];
}