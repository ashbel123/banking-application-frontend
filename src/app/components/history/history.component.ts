import { Component, OnInit } from "@angular/core";
import { AccountService } from "../../services/account.service";

@Component({
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.css"],
})
export class HistoryComponent implements OnInit {
  transactions: any[] = [];
  loading = true;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.loadTransactions();
  }

  loadTransactions(): void {
    this.accountService.getTransactions().subscribe({
      next: (res) => {
        console.log("Transaction history response:", res);
        this.transactions = res;
        this.loading = false;
      },
      error: (err) => {
        console.error("Failed to load transaction history", err);
        this.loading = false;
        alert("Failed to load transaction history");
      },
    });
  }
}
