import { z } from 'zod';

const sizeSchema = z.object({
  S: z.number(),
  M: z.number(),
  L: z.number(),
  XL: z.number(),
});

const itemSchema = z.object({
  id: z.number(),
  img: z.string(),
  name: z.string(),
  price: z.number(),
  quantities: sizeSchema,
});

const orderSchema = z.object({
  totalPrice: z.number(),
  items: z.array(itemSchema),
});

export type OrderItemType = z.infer<typeof orderSchema>;

export interface OrderType {
  data: Array<OrderItemType> | null;
  loading: boolean;
  error: boolean;
}
