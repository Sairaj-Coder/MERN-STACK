#include<bits/stdc++.h>
using namespace std;
void mergesort(int arr[],int low,int med,int high){
    vector<int>temp;
    int left=low;
    int right=med+1;
    while (left<=med and right<=high)
    {
        if(arr[left]<=arr[right]){
            temp.push_back(arr[left]);
            left++;
        }
        else{
            temp.push_back(arr[right]);
            right++;

        }
    }
    while (left<=med)
    {
        temp.push_back(arr[left]);
        left++;
    }
    while (right<=high)
    {
        temp.push_back(arr[right]);
        right++;
    }
    for (int i = low; i <= high ; i++)
    {
        arr[i]=temp[i-low];
    }
    
}
void sort(int arr[],int low,int high){
    if(low==high){
        return;
    }
    int med=(low+high)/2;
    sort(arr,low,med);
    sort(arr,med+1,high);
    mergesort(arr,low,med,high);

}
void merg(int arr[],int n){
    sort(arr,0,n-1);
    

}
int main(){
    int n=1;
    int arr[n]={7};
    merg(arr,n);
    for (auto it : arr)
    {
        cout<<it<<",";
    }
    
    return 0;
}